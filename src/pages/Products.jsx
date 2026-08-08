// // src/pages/Products.jsx
// import { useParams, Link, useNavigate } from 'react-router';
// import { categories } from '../data/products';

// const Products = () => {
//   const { categoryName } = useParams();
//   const navigate = useNavigate();

//   // Find the current category based on the URL param
//   // If no param, default to the first category
//   const currentCategory = categoryId 
//     ? categories.find((cat) => cat.id === categoryName) 
//     : categories[0];

//   // If the URL param is invalid, redirect to the first category
//   if (categoryId && !currentCategory) {
//     navigate(`/products/${categories[0].id}`, { replace: true });
//     return null;
//   }

//   return (
//     <div className="flex flex-col md:flex-row gap-8">
//       {/* ---------- SIDEBAR (Categories List) ---------- */}
//       <aside className="md:w-64 flex-shrink-0">
//         <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
//           Categories
//         </h3>
//         <ul className="space-y-1">
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = currentCategory?.id === cat.id;
//             return (
//               <li key={cat.id}>
//                 <Link
//                   to={`/products/${cat.id}`}
//                   className={`
//                     flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium
//                     ${
//                       isActive
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//                     }
//                   `}
//                 >
//                   <Icon size={18} />
//                   {cat.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </aside>

//       {/* ---------- PRODUCT GRID ---------- */}
//       <div className="flex-1">
//         {/* Category Header */}
//         <div className="mb-6 flex items-center gap-4">
//           <img
//             src={currentCategory.categoryImage}
//             alt={currentCategory.name}
//             className="w-12 h-12 object-cover rounded-lg border"
//             onError={(e) => (e.target.style.display = 'none')} // Hides image if missing
//           />
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               {currentCategory.name}
//             </h2>
//             <p className="text-sm text-gray-500">
//               {currentCategory.products.length} products available
//             </p>
//           </div>
//         </div>

//         {/* Product Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentCategory.products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
//             >
//               {/* Product Image */}
//               <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                   onError={(e) => {
//                     // Fallback image if the file is missing
//                     e.target.src = 'https://placehold.co/300x200/e2e8f0/64748b?text=No+Image';
//                   }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="p-4">
//                 <div className="flex justify-between items-start mb-1">
//                   <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
//                     {product.name}
//                   </h3>
//                   <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
//                     {product.model}
//                   </span>
//                 </div>
//                 <p className="text-gray-500 text-xs mb-3 line-clamp-2">
//                   {product.shortDesc}
//                 </p>

//                 {/* View Details Button */}
//                 <Link
//                   to={`/product/${product.id}`}
//                   className="block w-full text-center text-sm font-medium text-blue-600 border border-blue-200 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
//                 >
//                   View Specifications →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty state (just in case) */}
//         {currentCategory.products.length === 0 && (
//           <div className="text-center py-12 text-gray-400">
//             No products found in this category.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;


















// src/pages/Products.jsx
import { useParams, Link, useNavigate } from 'react-router';
import { categories } from '../data/products';

const Products = () => {
  // 1. Get the category name from the URL (e.g., 'analytical')
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // 2. Find the category that matches the URL
  const currentCategory = categoryName
    ? categories.find((cat) => cat.id === categoryName)
    : null;

  // 3. If the URL is invalid (e.g., user types /products/xyz), redirect to the first category
  if (categoryName && !currentCategory) {
    navigate(`/products/${categories[0].id}`, { replace: true });
    return null; // Show nothing while redirecting
  }

  // 4. If no category is selected (user goes to /products directly), default to the first one
  const activeCategory = currentCategory || categories[0];

  // 5. If for some reason there are no categories at all (safety check)
  if (!activeCategory) {
    return <div className="text-center py-10">No categories found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* ---------- SIDEBAR (Categories List) ---------- */}
      <aside className="md:w-64 flex-shrink-0">
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
          Categories
        </h3>
        <ul className="space-y-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <li key={cat.id}>
                <Link
                  to={`/products/${cat.id}`}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium
                    ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                >
                  <Icon size={18} />
                  {cat.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ---------- PRODUCT GRID ---------- */}
      <div className="flex-1">
        {/* Category Header */}
        <div className="mb-6 flex items-center gap-4">
          <img
            src={activeCategory.categoryImage}
            alt={activeCategory.name}
            className="w-12 h-12 object-cover rounded-lg border"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory.name}
            </h2>
            <p className="text-sm text-gray-500">
              {activeCategory.products.length} products available
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      'https://placehold.co/300x200/e2e8f0/64748b?text=No+Image';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm truncate">
                    {product.name}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded shrink-0 ml-2">
                    {product.model}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                  {product.shortDesc}
                </p>

                {/* View Details Button - Uses SLUG for SEO URLs */}
                <Link
                  to={`/products/${activeCategory.id}/${product.slug}`}
                  className="block w-full text-center text-sm font-medium text-blue-600 border border-blue-200 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  View Specifications →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state (just in case) */}
        {activeCategory.products.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;