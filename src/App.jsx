export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f3ee",
      fontFamily: "Arial, sans-serif",
      padding: 24,
      textAlign: "center"
    }}>
      <h1>HomeSpend</h1>
      <p>Where Your Money Really Goes</p>

      <div style={{
        background: "white",
        borderRadius: 24,
        padding: 24,
        maxWidth: 420,
        margin: "30px auto",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
      }}>
        <h2>Pure & Gentle Home Value App</h2>
        <p>
          Your web app is deployed successfully.
        </p>
        <button style={{
          padding: "14px 24px",
          borderRadius: 16,
          border: "2px solid black",
          background: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: 16
        }}>
          Start
        </button>
      </div>
    </div>
  );
}
