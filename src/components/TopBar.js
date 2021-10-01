
const TopBar = ({ styles }) => {
  const topBarStyle = {    
    display: "flex",    
    alignItems: "center",
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>      
      Friends List      
    </div>
  );
};

export default TopBar;