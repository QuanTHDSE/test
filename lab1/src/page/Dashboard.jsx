// Dashboard.jsx
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
    const [selectedOrchid, setSelectedOrchid] = useState(null)
    
    useEffect(() => {
        // Get the orchid data from localStorage
        const orchidData = localStorage.getItem("selectOrchid")
        if (orchidData) {
            setSelectedOrchid(JSON.parse(orchidData))
        }
    }, [])
    
    return (
        <div className="container mt-5 pt-5">
            {selectedOrchid ? (
                <div className="row">
                    <div className="col-md-6">
                        <img src={selectedOrchid.image} className="img-fluid" alt={selectedOrchid.name} />
                    </div>
                    <div className="col-md-6">
                        <h1>{selectedOrchid.name}</h1>
                        <div className="orchid-details">
                            <p><strong>Rating:</strong> {selectedOrchid.rating}</p>
                            <p><strong>Category:</strong> {selectedOrchid.category}</p>
                            <p><strong>Color:</strong> {selectedOrchid.color}</p>
                            <p><strong>Origin:</strong> {selectedOrchid.origin}</p>
                            <p><strong>Likes:</strong> {selectedOrchid.numberOfLike}</p>
                            <p><strong>Special:</strong> {selectedOrchid.isSpecial ? 'Yes' : 'No'}</p>
                            <p><strong>Natural:</strong> {selectedOrchid.isNatural ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No orchid selected</div>
            )}
        </div>
    )
}