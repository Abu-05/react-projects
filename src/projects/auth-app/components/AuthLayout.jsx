function AuthLayout({ children }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>{children}</div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "320px",
    padding: "20px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    boxSizing: "border-box",   // ✅ IMPORTANT
  },
};


export default AuthLayout;
