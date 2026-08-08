// // src/pages/CategoryGrid.jsx
// import { NavLink } from 'react-router';
// import { categories } from '../data/products';

// const CategoryGridPage = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-2">All Product Categories</h2>
//       <p className="text-gray-500 mb-6">Browse our complete range of laboratory equipment</p>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category) => {
//           const IconComponent = category.icon;
//           return (
//             <NavLink
//               key={category.id}
//               to={`/products/${category.id}`}
//               className="group block bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//             >
//               <div className="p-6 text-center">
//                 {/* Category Icon */}
//                 <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
//                   <IconComponent size={32} className="text-blue-600" />
//                 </div>
                
//                 {/* Category Name */}
//                 <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-blue-600 transition">
//                   {category.name}
//                 </h3>
                
//                 {/* Product Count */}
//                 <p className="text-sm text-gray-500 mt-1">
//                   {category.products.length} Products
//                 </p>

//                 {/* Decorative arrow on hover */}
//                 <div className="mt-4 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
//                   Browse Category →
//                 </div>
//               </div>
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryGridPage;

// src/pages/CategoryGrid.jsx
import { NavLink } from 'react-router';
import { categories } from '../data/products';

const CategoryGridPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">All Product Categories</h2>
      <p className="text-gray-500 mb-6">Browse our complete range of laboratory equipment</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          return (
            <NavLink
              key={category.id}
              to={`/products/${category.id}`}
              className="group block bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 text-center">
                {/* ---------- REPLACED LUCIDE ICON WITH ACTUAL CATEGORY IMAGE ---------- */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-blue-100 bg-gray-50 shadow-sm group-hover:border-blue-400 transition-all duration-300">
                  <img
                    src={category.categoryImage}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image is missing
                      e.target.src = 'https://placehold.co/96x96/e2e8f0/64748b?text=?';
                    }}
                  />
                </div>
                
                {/* Category Name */}
                <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                
                {/* Product Count */}
                <p className="text-sm text-gray-500 mt-1">
                  {category.products.length} Products
                </p>

                {/* Decorative arrow on hover */}
                <div className="mt-4 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse Category →
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGridPage;