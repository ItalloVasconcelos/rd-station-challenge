import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "../Card";
import {RecommendationCard} from "./RecommendationCard";

function RecommendationList({ recommendations }) {
  return (
    <div className="lg:col-span-5">
        <Card className="shadow-lg bg border-gray-50">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Lista de Recomendações:
                </CardTitle>
            </CardHeader>
            <CardContent>
                {recommendations.length === 0 &&
                    <div className="flex flex-col items-center justify-center h-96 text-gray-500">
                        <p>Nenhuma recomendação encontrada.</p>
                        <p className="text-sm mt-2">Selecione suas preferências e clique em "Obter recomendação"</p>
                    </div>}

                <ul>
                {recommendations.map((recommendation, index) => (
                        <li key={index} className="mb-2">
                            <RecommendationCard title={recommendation.name} description={recommendation.description} />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>



    </div>
  );
}

export default RecommendationList;
