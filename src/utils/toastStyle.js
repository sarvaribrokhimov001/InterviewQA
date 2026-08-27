const baseToastStyle = {
  style: {
    background: "#0f172a",
    color: "#f8fafc",
    border: "1px solid #334155",
    borderRadius: "12px",
    padding: "12px 16px",
    fontWeight: "700",
    fontSize: "14px",
  },
};

export const successStyle = {
  ...baseToastStyle,
  iconTheme: {
    primary: "#22c55e",
    secondary: "#0f172a",
  },
};

export const errorStyle = {
  ...baseToastStyle,
  iconTheme: {
    primary: "#ef4444",
    secondary: "#0f172a",
  },
};