import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* HEADER */}
      {/* TITLE SELECT INPUT DROPDOWN FIELD */}

      {/* INFOBOXES */}
      {/* INFOBOXES */}
      {/* INFOBOXES */}

      {/* Table */}

      {/* MAP */}
    </div>
  );
}

export default App;
