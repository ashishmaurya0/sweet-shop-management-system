import React from 'react';
import { Plus, Edit, Trash2, Package } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminSweetForm from '../components/AdminSweetForm';

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
}

export default function Admin() {
  const [isAuthenticated] = React.useState(true);
  const [isAdmin] = React.useState(true);
  const [sweets, setSweets] = React.useState<Sweet[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const [editingSweet, setEditingSweet] = React.useState<Sweet | undefined>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Mock data
  React.useEffect(() => {
    const mockSweets: Sweet[] = [
      {
        id: '1',
        name: 'Dark Chocolate Truffles',
        category: 'chocolate',
        price: 12.99,
        quantity: 25,
        description: 'Rich and creamy dark chocolate truffles with a smooth ganache center',
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2',
        name: 'Gummy Bears',
        category: 'gummies',
        price: 4.99,
        quantity: 50,
        description: 'Classic fruit-flavored gummy bears in assorted colors',
        image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3',
        name: 'Strawberry Macarons',
        category: 'macarons',
        price: 18.99,
        quantity: 12,
        description: 'Delicate French macarons with strawberry buttercream filling',
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ];

    setTimeout(() => {
      setSweets(mockSweets);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddSweet = () => {
    setEditingSweet(undefined);
    setShowForm(true);
  };

  const handleEditSweet = (sweet: Sweet) => {
    setEditingSweet(sweet);
    setShowForm(true);
  };

  const handleDeleteSweet = async (sweetId: string) => {
    if (!confirm('Are you sure you want to delete this sweet?')) {
      return;
    }

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSweets(prevSweets => prevSweets.filter(sweet => sweet.id !== sweetId));
      toast.success('Sweet deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete sweet. Please try again.');
    }
  };

  const handleFormSubmit = async (data: Omit<Sweet, 'id'>) => {
    setIsSubmitting(true);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (editingSweet) {
        // Update existing sweet
        setSweets(prevSweets =>
          prevSweets.map(sweet =>
            sweet.id === editingSweet.id
              ? { ...sweet, ...data }
              : sweet
          )
        );
        toast.success('Sweet updated successfully!');
      } else {
        // Add new sweet
        const newSweet: Sweet = {
          id: Date.now().toString(),
          ...data
        };
        setSweets(prevSweets => [...prevSweets, newSweet]);
        toast.success('Sweet added successfully!');
      }

      setShowForm(false);
      setEditingSweet(undefined);
    } catch (error) {
      toast.error('Failed to save sweet. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRestock = async (sweetId: string, additionalQuantity: number) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSweets(prevSweets =>
        prevSweets.map(sweet =>
          sweet.id === sweetId
            ? { ...sweet, quantity: sweet.quantity + additionalQuantity }
            : sweet
        )
      );
      toast.success(`Restocked ${additionalQuantity} items successfully!`);
    } catch (error) {
      toast.error('Failed to restock. Please try again.');
    }
  };

  const handleLogout = () => {
    // Mock logout functionality
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header 
          isAuthenticated={isAuthenticated} 
          isAdmin={isAdmin} 
          onLogout={handleLogout} 
        />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading admin panel...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        isAuthenticated={isAuthenticated} 
        isAdmin={isAdmin} 
        onLogout={handleLogout} 
      />
      
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
              <p className="text-gray-600">Manage your sweet inventory</p>
            </div>
            <button
              onClick={handleAddSweet}
              className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Sweet</span>
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sweet
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sweets.map((sweet) => (
                    <tr key={sweet.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {sweet.image ? (
                              <img
                                className="h-10 w-10 rounded-lg object-cover"
                                src={sweet.image}
                                alt={sweet.name}
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                                <Package className="h-5 w-5 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {sweet.name}
                            </div>
                            {sweet.description && (
                              <div className="text-sm text-gray-500 max-w-xs truncate">
                                {sweet.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 capitalize">
                          {sweet.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${sweet.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium ${
                            sweet.quantity === 0 
                              ? 'text-red-600' 
                              : sweet.quantity <= 5 
                              ? 'text-yellow-600' 
                              : 'text-green-600'
                          }`}>
                            {sweet.quantity}
                          </span>
                          <button
                            onClick={() => handleRestock(sweet.id, 10)}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                          >
                            +10
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditSweet(sweet)}
                            className="text-rose-600 hover:text-rose-900 p-1 hover:bg-rose-50 rounded transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteSweet(sweet.id)}
                            className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {sweets.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-4">No sweets in inventory</p>
              <button
                onClick={handleAddSweet}
                className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
              >
                Add your first sweet
              </button>
            </div>
          )}
        </div>
      </main>

      {showForm && (
        <AdminSweetForm
          sweet={editingSweet}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingSweet(undefined);
          }}
          isLoading={isSubmitting}
        />
      )}
      
      <Footer />
    </div>
  );
}