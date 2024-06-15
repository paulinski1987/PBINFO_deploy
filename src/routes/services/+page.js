// export const  options = {
//   navigation: true,
//   // responsiveWidth: 700,
//   // anchors: ['Renovations', 'Outdoors', 'Kitchen&Bath', 'Windows'],
//   onLeave: function(origin, destination, direction){
//     console.log("Leaving section" + origin.index);
//   }
// }
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {


// 	error(404, 'Not found');
// }

export const ssr = false;
export const csr = true;