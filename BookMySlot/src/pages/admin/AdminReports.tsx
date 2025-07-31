import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';
import { AreaChart, Area, BarChart, Bar, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const AdminReports = () => {
  const bookingData = [
    {
      "bookingCount": 412,
      "month": "January 2023"
    },
    {
      "bookingCount": 392,
      "month": "February 2023"
    },
    {
      "bookingCount": 422,
      "month": "March 2023"
    },
    {
      "bookingCount": 300,
      "month": "April 2023"
    },
    {
      "bookingCount": 402,
      "month": "May 2023"
    },
    {
      "bookingCount": 382,
      "month": "June 2023"
    },
    {
      "bookingCount": 441,
      "month": "July 2023"
    }
  ];

  return (
    <div className="flex flex-row">
            <AdminSidebar />
            <div className="flex flex-col w-screen h-screen ">
                <Topbar />
                <div className="flex flex-col w-[95%] mt-1 ml-1">
                 <ResponsiveContainer width={"90%"} height={300}>
                     <AreaChart
                    data={bookingData}
                    width={1000}
                    height={300}
                    style={{marginTop : '20px', marginLeft: '20px'}}>
                    <XAxis name="Month" dataKey="month" />
                    <YAxis name="Booking Count" />
                    <Tooltip />
                    <Area
                    dataKey="bookingCount"
                    stroke="none"
                    fill="#8884d8"
                    />
                  </AreaChart>
                 </ResponsiveContainer>
                 <ResponsiveContainer width={"90%"} height={300}>
                     <BarChart
                    data={bookingData}
                    width={1000}
                    height={300}
                    style={{marginTop : '20px', marginLeft: '20px'}}>
                    <XAxis name="Month" dataKey="month" />
                    <YAxis name="Booking Count" />
                    <Tooltip />
                    <Bar
                    dataKey="bookingCount"
                    stroke="none"
                    fill="#8884d8"
                    />
                  </BarChart>
                 </ResponsiveContainer>
                 <ResponsiveContainer width={"90%"} height={300}>
                     <LineChart
                    data={bookingData}
                    width={1000}
                    height={300}
                    style={{marginTop : '20px', marginLeft: '20px'}}>
                    <XAxis name="Month" dataKey="month" />
                    <YAxis name="Booking Count" />
                    <Tooltip />
                    <Line
                    dataKey="bookingCount"
                    fill="#8884d8"
                    />
                  </LineChart>
                 </ResponsiveContainer>
                </div>
            </div>
        </div>
  )
}

export default AdminReports