import React from 'react';
import {SubmitButton} from "../../Form/SubmitButton";


function RecommendationCard({ title, description }) {
    return (
        <div className="border border-gray-200 bg-white hover:shadow-lg transition-shadow rounded-lg">
            <div className="p-4">
                <div className="flex items-start gap-3">

                    <div>
                        <h3 className="font-semibold text-gray-800">{title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{description}</p>
                    </div>
                </div>
                <div className="mt-3 flex ">
                    <div className="text-rdblue hover:text-rdblue-dark text-sm font-medium flex items-center">
                        <SubmitButton className="text-xs py-2 px-4" text="Fale com vendas" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendationCard;