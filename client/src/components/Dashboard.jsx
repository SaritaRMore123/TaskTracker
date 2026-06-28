import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import Filter from "./Filter";

function Dashboard() {
  return (
    <div className="container mt-5">

      <div className="hero">

        <h1>
          Welcome 👋
        </h1>

        <p>
          Organize your daily work with TaskTracker Pro.
        </p>

      </div>

      <div className="row mt-4">

        <div className="col-md-3">

          <div className="card stat-card shadow">

            <h2>12</h2>

            <p>Total Tasks</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card stat-card shadow">

            <h2>5</h2>

            <p>Pending</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card stat-card shadow">

            <h2>3</h2>

            <p>In Progress</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card stat-card shadow">

            <h2>4</h2>

            <p>Completed</p>

          </div>

        </div>

      </div>

      <div className="mt-5">

        <Filter />

      </div>

      <div className="mt-4">

        <TaskForm />

      </div>

      <div className="mt-5">

        <TaskCard />

      </div>

    </div>
  );
}

export default Dashboard;