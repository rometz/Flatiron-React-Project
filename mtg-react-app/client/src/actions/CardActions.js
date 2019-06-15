export function createCard(name, id) {
    return async dispatch => {
        const response = await fetch('http://localhost:3001/api/cards', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http://localhost:3000" },
            body: JSON.stringify({name, id})
        });
        const payload = await response.json();
        dispatch({ type: "CREATE_CARD", payload });
    };
};

export function deleteCards() {
    return async dispatch => {
        const response = await fetch('/api/cards/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const payload = await response.json();
        dispatch({ type: "DELETE_CARDS", payload });
    };
};
