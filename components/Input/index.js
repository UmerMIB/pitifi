// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <div className="mt-1">
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="you@example.com"
//         />
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */

// // --------------------2nd ------------------ //
// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <div className="mt-1">
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="you@example.com"
//           aria-describedby="email-description"
//         />
//       </div>
//       <p className="mt-2 text-sm text-gray-500" id="email-description">
//         We'll only use this for spam.
//       </p>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------3rd ------------------ //
// import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
//           placeholder="you@example.com"
//           defaultValue="adamwathan"
//           aria-invalid="true"
//           aria-describedby="email-error"
//         />
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//           <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
//         </div>
//       </div>
//       <p className="mt-2 text-sm text-red-600" id="email-error">
//         Your password must be less than 4 characters.
//       </p>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------4th ------------------ //
// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <div className="mt-1">
//         <input
//           type="email"
//           name="email"
//           id="email"
//           defaultValue="you@example.com"
//           disabled
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
//           placeholder="you@example.com"
//         />
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // -------------------- 5th ------------------ //
// export default function Example() {
//   return (
//     <div>
//       <div className="flex justify-between">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <span className="text-sm text-gray-500" id="email-optional">
//           Optional
//         </span>
//       </div>
//       <div className="mt-1">
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="you@example.com"
//           aria-describedby="email-optional"
//         />
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // -------------------- 6th ------------------ //
// import { EnvelopeIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </div>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="you@example.com"
//         />
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // -------------------- 7th ------------------ //
// import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
//         Account number
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <input
//           type="text"
//           name="account-number"
//           id="account-number"
//           className="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="000-00-0000"
//         />
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//           <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </div>
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // -------------------- 8th ------------------ //

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//         Price
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <span className="text-gray-500 sm:text-sm">$</span>
//         </div>
//         <input
//           type="text"
//           name="price"
//           id="price"
//           className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="0.00"
//           aria-describedby="price-currency"
//         />
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//           <span className="text-gray-500 sm:text-sm" id="price-currency">
//             USD
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------9th ------------------ //
// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//         Price
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <span className="text-gray-500 sm:text-sm">$</span>
//         </div>
//         <input
//           type="text"
//           name="price"
//           id="price"
//           className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="0.00"
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center">
//           <label htmlFor="currency" className="sr-only">
//             Currency
//           </label>
//           <select
//             id="currency"
//             name="currency"
//             className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option>USD</option>
//             <option>CAD</option>
//             <option>EUR</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------10th ------------------ //
// export default function Example() {
//   return (
//     <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
//       <label
//         htmlFor="name"
//         className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
//       >
//         Name
//       </label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//         placeholder="Jane Smith"
//       />
//     </div>
//   )
// }

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------11th ------------------ //
// export default function Example() {
//   return (
//     <div className="isolate -space-y-px rounded-md shadow-sm">
//       <div className="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
//         <label htmlFor="name" className="block text-xs font-medium text-gray-900">
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//           placeholder="Jane Smith"
//         />
//       </div>
//       <div className="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
//         <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
//           Job Title
//         </label>
//         <input
//           type="text"
//           name="job-title"
//           id="job-title"
//           className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//           placeholder="Head of Tomfoolery"
//         />
//       </div>
//     </div>
//   )
// }
// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// // --------------------12th ------------------ //
// export default function Example() {
//   return (
//     <div>
//       <fieldset>
//         <legend className="block text-sm font-medium text-gray-700">Card Details</legend>
//         <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
//           <div>
//             <label htmlFor="card-number" className="sr-only">
//               Card number
//             </label>
//             <input
//               type="text"
//               name="card-number"
//               id="card-number"
//               className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               placeholder="Card number"
//             />
//           </div>
//           <div className="flex -space-x-px">
//             <div className="w-1/2 min-w-0 flex-1">
//               <label htmlFor="card-expiration-date" className="sr-only">
//                 Expiration date
//               </label>
//               <input
//                 type="text"
//                 name="card-expiration-date"
//                 id="card-expiration-date"
//                 className="relative block w-full rounded-none rounded-bl-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="MM / YY"
//               />
//             </div>
//             <div className="min-w-0 flex-1">
//               <label htmlFor="card-cvc" className="sr-only">
//                 CVC
//               </label>
//               <input
//                 type="text"
//                 name="card-cvc"
//                 id="card-cvc"
//                 className="relative block w-full rounded-none rounded-br-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="CVC"
//               />
//             </div>
//           </div>
//         </div>
//       </fieldset>
//       <fieldset className="mt-6 bg-white">
//         <legend className="block text-sm font-medium text-gray-700">Billing address</legend>
//         <div className="mt-1 -space-y-px rounded-md shadow-sm">
//           <div>
//             <label htmlFor="country" className="sr-only">
//               Country
//             </label>
//             <select
//               id="country"
//               name="country"
//               autoComplete="country-name"
//               className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             >
//               <option>United States</option>
//               <option>Canada</option>
//               <option>Mexico</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="postal-code" className="sr-only">
//               ZIP / Postal code
//             </label>
//             <input
//               type="text"
//               name="postal-code"
//               id="postal-code"
//               autoComplete="postal-code"
//               className="relative block w-full rounded-none rounded-b-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               placeholder="ZIP / Postal code"
//             />
//           </div>
//         </div>
//       </fieldset>
//     </div>
//   )
// }
// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Search candidates
//       </label>
//       <div className="mt-1 flex rounded-md shadow-sm">
//         <div className="relative flex flex-grow items-stretch focus-within:z-10">
//           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//             <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </div>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             placeholder="John Smith"
//           />
//         </div>
//         <button
//           type="button"
//           className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//         >
//           <BarsArrowUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           <span>Sort</span>
//         </button>
//       </div>
//     </div>
//   )
// }
