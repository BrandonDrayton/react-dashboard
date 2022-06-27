
import './App.css';
import { Container } from '@mui/system';
import ResponsiveDrawer from './components/AppBar';
import BasicTable from './components/Table';
import BasicCard from './components/Card';


function App() {
  let utcDate = new Date(Date.UTC())
  let usDate = new Date(utcDate)
  usDate.setHours(utcDate.getHours() + 4)
  let sydneyDate = new Date(Date.UTC())
  sydneyDate.setHours(utcDate.getHours() + 10)
  let londonDate = new Date(Date.UTC())
  londonDate.setHours(utcDate.getHours() + 1)
  return (
    <Container>
      <ResponsiveDrawer />
      <Container sx={{ display: 'flex' }}>
        <BasicCard time={usDate} city="Atlanta" />
        <BasicCard time={londonDate} city="London" />
        <BasicCard time={sydneyDate} city="Sydney" />
      </Container>
      <Container>
        <BasicTable />
      </Container>
    </Container>

  );
}

export default App;
