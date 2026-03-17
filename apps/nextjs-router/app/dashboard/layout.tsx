import React from "react";

export default function DashboardLayout({
  children,
  notifications,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
      <div
        className="h-fit"
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {notifications}
          {users}
        </div>
        <div className="w-full flex-1">{revenue}</div>
      </div>
    </div>
  );
}
