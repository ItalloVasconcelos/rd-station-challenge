import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../Card';

function Form({ onUpdateRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = getRecommendations(formData);
    onUpdateRecommendations(recommendations);
  };

  return (
      <Card className="shadow-lg bg border-gray-50">
        <CardHeader className="bg-blue-500 text-white">
          <CardTitle className="text-2xl font-bold">Recomendador de Produtos RD Station</CardTitle>
          <CardDescription className="text-white/90">
            Selecione suas preferências e funcionalidades para obter uma recomendação personalizada.
          </CardDescription>
        </CardHeader>

          <CardContent className="pt-6">
              <div className="col-span-2 mb-4">
                  <p className="text-gray-700 mb-4">
                      Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de
                      produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio.
                      De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a
                      alcançar seus objetivos.</p>
                      <p className="text-gray-700  font-medium mb-6"> Use o formulário abaixo para selecionar suas preferências e
                      funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às
                          suas necessidades.</p>

              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <Preferences
                      preferences={preferences}
                      selectedPreferences={formData.selectedPreferences}
                      onPreferenceChange={(selected) =>
                          handleChange('selectedPreferences', selected)
                      }
                  />
                  <Features
                      features={features}
                      selectedFeatures={formData.selectedFeatures}
                      onFeatureChange={(selected) =>
                          handleChange('selectedFeatures', selected)
                      }
                  />
                  <RecommendationType
                      selectedRecommendationType={formData.selectedRecommendationType}
                      onRecommendationTypeChange={(selected) =>
                          handleChange('selectedRecommendationType', selected)
                      }
                  />
                  <SubmitButton text="Obter recomendação"/>
              </form>
          </CardContent>
      </Card>
  );
}

export default Form;
