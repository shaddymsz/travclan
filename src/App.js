import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DataTable from "./dataTable";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 675,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://intense-tor-76305.herokuapp.com/merchants"
      );

      setData(result.data);
    };

    fetchData();
    // console.log(data);
  }, []);
  if (data && data.length === 0) {
    return <p>Loading....</p>;
  }
  return (
    <div className="App">
      <Card className="card-table">
        <CardContent>
          <DataTable data={data} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
