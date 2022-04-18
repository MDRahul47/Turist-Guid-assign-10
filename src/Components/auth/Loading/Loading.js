import React from 'react';

const Loading = () => {
    return (
        <div>
            <div style={{ height: "400px " }} class="spinner-border w-100 justify-content-center align-items-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;