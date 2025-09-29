import express from 'express';
import usersRoute from './routes/UsersRoute';
import employeesRoute from './routes/EmployeesRoute';
import payRunsRoute from './routes/PayRunsRoute';
import payslipsRoute from './routes/PayslipsRoute';
import paymentsRoute from './routes/PaymentsRoute';
import dashboardRoute from './routes/DashboardRoute';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Votre page de bienvenue ');
});

app.use('/users', usersRoute);
app.use('/employees', employeesRoute);
app.use('/payruns', payRunsRoute);
app.use('/payslips', payslipsRoute);
app.use('/payments', paymentsRoute);
app.use('/dashboard', dashboardRoute);

export default app;
