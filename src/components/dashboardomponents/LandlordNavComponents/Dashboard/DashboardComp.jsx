import React, { useState } from 'react';
import Dashboard from "./Dashboard";
import PGDash from "./PGDash";

const DashboardComp = ({ formData, ownedPGsData, loadingPGs, pgError }) => {
  const [selectedPGIndex, setSelectedPGIndex] = useState(0);
  
  // Get the currently selected PG data
  const currentPGData = ownedPGsData && ownedPGsData.length > 0 
    ? ownedPGsData[selectedPGIndex] 
    : null;

  // Handle PG selection (if landlord owns multiple PGs)
  const handlePGSelection = (index) => {
    setSelectedPGIndex(index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* PG Selector - show only if landlord owns multiple PGs */}
      {ownedPGsData && ownedPGsData.length > 1 && (
        <div className="w-full bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-3">Select PG</h3>
          <div className="flex gap-2 flex-wrap">
            {ownedPGsData.map((pg, index) => (
              <button
                key={pg.RID}
                onClick={() => handlePGSelection(index)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedPGIndex === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {pg.pgName}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading State */}
      {loadingPGs && (
        <div className="w-full bg-white rounded-lg p-8 shadow-md flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading PG data...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {pgError && !loadingPGs && (
        <div className="w-full bg-red-50 border border-red-200 rounded-lg p-4 shadow-md">
          <p className="text-red-600">{pgError}</p>
        </div>
      )}

      {/* No PGs State */}
      {!loadingPGs && !pgError && (!ownedPGsData || ownedPGsData.length === 0) && (
        <div className="w-full bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-md">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">No PG Registered</h3>
            <p className="text-yellow-700 mb-4">
              You haven't registered any PG yet. Register your first PG to see dashboard details.
            </p>
            <button
              onClick={() => {/* Navigate to Register PG - you might want to use setBar(1) here */}}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Register Your PG
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Components with PG Data */}
      {!loadingPGs && currentPGData && (
        <>
          <Dashboard 
            formData={formData} 
            pgData={currentPGData} 
            loading={loadingPGs} 
            error={pgError} 
          />
          <PGDash 
            pgData={currentPGData} 
            loading={loadingPGs} 
            error={pgError} 
          />
        </>
      )}
    </div>
  );
};

export default DashboardComp;