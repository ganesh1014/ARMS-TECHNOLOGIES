// src/pages/ProductDetail.jsx
import { useParams } from 'react-router';

const ProductDetailPage = () => {
  const { categoryName, productName } = useParams();
  
  return (
    <div className="py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Product Detail</h2>
      <p className="text-gray-500 mt-2">
        Category: <span className="font-medium">{categoryName}</span>
      </p>
      <p className="text-gray-500">
        Product: <span className="font-medium">{productName}</span>
      </p>
      <div className="mt-8 p-8 bg-gray-50 border border-gray-200 rounded-xl max-w-lg mx-auto">
        <p className="text-gray-600">Full product specifications will appear here.</p>
        <p className="text-sm text-gray-400 mt-2">(Replace this with your real ProductDetail component)</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;