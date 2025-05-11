import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import {Header} from "./components/Header";

function App() {
  const [recommendations, setRecommendations ] = useState([])

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Header logo="./assets/img/logo.svg" title="Recomendador de Produtos RD Station" />
      <div className="mb-20"></div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4  grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <Form  onUpdateRecommendations={setRecommendations} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
