import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis dataKey="count" />
        <Bar dataKey="count" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
