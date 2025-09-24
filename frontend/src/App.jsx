import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-center mt-10">Welcome to SB Works</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/bid-project" element={<BidProject />} />
        <Route path="/assign-freelancer" element={<AssignFreelancer />} />
        <Route path="/submit-work" element={<SubmitWork />} />
        <Route path="/view-bids" element={<ViewBids />} />
        <Route path="/view-submissions" element={<ViewSubmissions />} />
      </Routes>
    </>
  );
}
