import React from 'react';

export default function Footer() {
  return (
    <footer className="border-top d-flex justify-content-center align-items-center py-3">
      <div className="d-flex align-items-center">
        <span className="fw-bold text-primary me-2">PHP Editor</span>
        <span className="text-muted">
          © {new Date().getFullYear()} Pilkommedia
        </span>
      </div>
    </footer>
  );
}
