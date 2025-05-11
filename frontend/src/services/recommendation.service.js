// getRecommendations.js

const getRecommendations = (
  formData =
      { selectedPreferences: [],
        selectedFeatures: [],
        selectedRecommendationTypes: 'MultipleProducts'},
  products
) => {
  if (!products?.length) return [];

  const {
      selectedPreferences = [],
      selectedFeatures = [],
      selectedRecommendationType = 'MultipleProducts',
  } = formData;

    if (
        selectedRecommendationType === 'MultipleProducts' &&
        selectedPreferences.length === 0 &&
        selectedFeatures.length === 0
    ) {
        return products;
    }
  const noFilterSelected = selectedPreferences.length === 0 && selectedFeatures.length === 0;
  if (selectedRecommendationType === 'MultipleProduct' && noFilterSelected) {
      return products;
  }
  const scored = products
      .map((product) => {
    const score = [
        ...selectedPreferences.filter((pref) => product.preferences.includes(pref)),
        ...selectedFeatures.filter((feat) => product.features.includes(feat))
    ].length;

        return { ...product, score };
  })
      .filter((product) => product.score > 0)

  if (selectedRecommendationType === 'SingleProduct') {
      if (scored.length === 0) return[];

    const maxScore = Math.max(...scored.map((p) => p.score));
    return [scored.filter((p) => p.score === maxScore).pop()];
  }
  return scored.sort((a, b) => b.score - a.score);

};

const recommendationsService = { getRecommendations }

export default recommendationsService;
