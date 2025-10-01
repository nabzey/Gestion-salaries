import express from 'express';
import cors from 'cors';
import usersRoute from './routes/UsersRoute';
import employeesRoute from './routes/EmployeesRoute';
import payRunsRoute from './routes/PayRunsRoute';
import payslipsRoute from './routes/PayslipsRoute';
import paymentsRoute from './routes/PaymentsRoute';
import dashboardRoute from './routes/DashboardRoute';

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175',
      'http://localhost:5176',
      process.env.FRONTEND_URL || 'http://localhost:5173'
    ],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Votre page de bienvenue ');
});

// Routes
app.use('/users', usersRoute);
app.use('/employees', employeesRoute);
app.use('/payruns', payRunsRoute);
app.use('/payslips', payslipsRoute);
app.use('/payments', paymentsRoute);
app.use('/dashboard', dashboardRoute);

export default app;
