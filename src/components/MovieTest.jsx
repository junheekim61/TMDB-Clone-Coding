// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';

// export default function Movie(props) {
//   const [Movies, setMovies] = useState([]);
//   const [MainMoiveImage, setMainMovieImage] = useState(null);

//   useEffect(() => {
//     const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

//     fetch(endpoint)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setMovies(response.results);
//         setMainMovieImage(response.results[0]);
//       });
//   }, []);

//   return (
//     <div style={{ width: '100%'}}>
//       {MainMoiveImage && (
//         <div
//           style={{
//             maxWidth: '100%',
//             height: '500px',
//             background: `url(${IMAGE_BASE_URL}w1280${MainMoiveImage.backdrop_path})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             position: 'relative'
//           }}
//         >
//           <div
//             id="MainImage"
//             style={{
//               position: 'absolute',
//               maxWidth: '500px',
//               bottom: '2rem',
//               marginLeft: '2rem',
//             }}
//           >
//             <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}>{MainMoiveImage.original_title}</h2>
//             <p style={{ color: 'white', fontSize: '1rem' }}>{MainMoiveImage.overview}</p>
//           </div>
//         </div>
//       )}

//       <div style={{ width: '85%', margin: '1rem auto' }}>
//         <h2>Movies by latest</h2>
//         <hr />
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <button>Load More</button>
//       </div>
//     </div>
//   );
// }
