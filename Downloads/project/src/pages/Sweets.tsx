import React from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SweetCard from '../components/SweetCard';
import SearchFilters from '../components/SearchFilters';

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
}

export default function Sweets() {
  const [isAuthenticated] = React.useState(false);
  const [isAdmin] = React.useState(false);
  const [sweets, setSweets] = React.useState<Sweet[]>([]);
  const [filteredSweets, setFilteredSweets] = React.useState<Sweet[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 100 });
  const [isLoading, setIsLoading] = React.useState(true);
  const [purchasingId, setPurchasingId] = React.useState<string | null>(null);

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
      },
      {
        id: '4',
        name: 'Peppermint Candy Canes',
        category: 'candy',
        price: 6.99,
        quantity: 0,
        description: 'Traditional red and white striped peppermint candy canes',
        image: 'https://placehold.co/800x400'
      },
      {
        id: '5',
        name: 'Milk Chocolate Bars',
        category: 'chocolate',
        price: 8.99,
        quantity: 30,
        description: 'Smooth and creamy milk chocolate bars made with premium cocoa',
        image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '6',
        name: 'Assorted Lollipops',
        category: 'candy',
        price: 3.99,
        quantity: 40,
        description: 'Colorful lollipops in various fruit flavors',
        image: 'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ];

    setTimeout(() => {
      setSweets(mockSweets);
      setFilteredSweets(mockSweets);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter sweets based on search criteria
  React.useEffect(() => {
    let filtered = sweets;

    if (searchTerm) {
      filtered = filtered.filter(sweet =>
        sweet.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(sweet => sweet.category === selectedCategory);
    }

    filtered = filtered.filter(sweet =>
      sweet.price >= priceRange.min && sweet.price <= priceRange.max
    );

    setFilteredSweets(filtered);
  }, [sweets, searchTerm, selectedCategory, priceRange]);

  const handlePurchase = async (sweetId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to purchase sweets');
      return;
    }

    setPurchasingId(sweetId);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSweets(prevSweets =>
        prevSweets.map(sweet =>
          sweet.id === sweetId
            ? { ...sweet, quantity: Math.max(0, sweet.quantity - 1) }
            : sweet
        )
      );

      toast.success('Sweet purchased successfully!');
    } catch (error) {
      toast.error('Failed to purchase sweet. Please try again.');
    } finally {
      setPurchasingId(null);
    }
  };

  const handleLogout = () => {
    // Mock logout functionality
  };

  const categories = Array.from(new Set(sweets.map(sweet => sweet.category)));

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
            <p className="text-gray-600">Loading sweets...</p>
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Sweets</h1>
            <p className="text-gray-600">Discover our delicious collection of premium sweets and confections</p>
          </div>

          <SearchFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            categories={categories}
          />

          {filteredSweets.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No sweets found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setPriceRange({ min: 0, max: 100 });
                }}
                className="mt-4 text-rose-600 hover:text-rose-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSweets.map((sweet) => (
                <SweetCard
                  key={sweet.id}
                  sweet={sweet}
                  onPurchase={handlePurchase}
                  isLoading={purchasingId === sweet.id}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}