import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackText, setFeedbackText] = useState('');

    // Function to fetch feedbacks from Firebase
    const fetchFeedbacks = async () => {
        try {
            const querySnapshot = await db.collection('feedbacks').get();
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFeedbacks(data);
        } catch (error) {
            console.error('Error fetching feedbacks:', error.message);
        }
    };

    // Function to handle submitting feedback
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection('feedbacks').add({ text: feedbackText });
            // Reset feedback text after submission
            setFeedbackText('');
            // Fetch updated feedbacks
            fetchFeedbacks();
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
        }
    };

    // Function to handle deleting feedback
    const handleDelete = async (id) => {
        try {
            await db.collection('feedbacks').doc(id).delete();
            // Fetch updated feedbacks after deletion
            fetchFeedbacks();
        } catch (error) {
            console.error('Error deleting feedback:', error.message);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []); // Fetch feedbacks when component mounts

    return (
        <div>
            <h2>Feedbacks</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Enter your feedback..."
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {feedbacks.map((feedback) => (
                    <li key={feedback.id}>
                        {feedback.text}
                        <button onClick={() => handleDelete(feedback.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;