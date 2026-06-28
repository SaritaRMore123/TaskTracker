function Stats() {
  return (

<div className="row g-3 mb-4">

<div className="col-md-3">
<div className="card shadow text-center p-3 stat-card">
<h3>12</h3>
<p>Total Tasks</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3 stat-card">
<h3>5</h3>
<p>Pending</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3 stat-card">
<h3>4</h3>
<p>Completed</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3 stat-card">
<h3>3</h3>
<p>In Progress</p>
</div>
</div>

</div>

  );
}

export default Stats;