import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Fake data: progress so far and projected scores (closer together)
// Show last 2 weeks and next 4 weeks
const data = [
  { name: "2 Weeks Ago", Actual: 1190, Projected: null },
  { name: "Last Week", Actual: 1240, Projected: null },
  { name: "Today", Actual: 1270, Projected: 1270 },
  { name: "+1 Week", Actual: 1280, Projected: 1320 },
  { name: "+2 Weeks", Actual: 1285, Projected: 1350 },
  { name: "+3 Weeks", Actual: 1288, Projected: 1370 },
  { name: "Next Test (27d)", Actual: 1290, Projected: 1380 },
];


const ProjectedScore: React.FC = () => {
  // Find the last actual and projected scores
  const lastActual = data.filter(d => d.Actual !== null).slice(-1)[0]?.Actual;
  const lastProjected = data.slice(-1)[0]?.Projected;

  return (
    <div style={{ width: "100%", marginTop: 32 }}>
      <div
        style={{
          background: '#fff',
          borderRadius: 18,
          boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
          border: '1.5px solid #e2e8f0',
          padding: '32px 2vw',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 4,
            textAlign: 'center',
            color: '#2d3748',
            letterSpacing: 0.5,
          }}
        >
          SAT Progress & Projections
        </h2>
        <p
          style={{
            margin: '0 0 18px 0',
            color: '#4a5568',
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 400,
          }}
        >
          The green dashed line shows your projected score if you follow all feedback and suggestions.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          marginBottom: 12,
          marginTop: 4,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 6, background: '#8884d8', borderRadius: 3, display: 'inline-block' }} />
            <span style={{ color: '#2d3748', fontWeight: 500 }}>Current Trajectory:</span>
            <span style={{ color: '#8884d8', fontWeight: 700, fontSize: 16 }}>{lastActual ?? '—'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 6, background: '#82ca9d', borderRadius: 3, display: 'inline-block', border: '2px dashed #82ca9d' }} />
            <span style={{ color: '#2d3748', fontWeight: 500 }}>If All Suggestions:</span>
            <span style={{ color: '#82ca9d', fontWeight: 700, fontSize: 16 }}>{lastProjected ?? '—'}</span>
          </div>
        </div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[1000, 1450]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Actual" stroke="#8884d8" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Projected" stroke="#82ca9d" strokeDasharray="5 5" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectedScore;
