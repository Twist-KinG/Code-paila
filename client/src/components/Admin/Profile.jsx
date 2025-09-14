
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const { admin } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    profileImage: "",
  });

  useEffect(() => {
    const savedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (savedAdmin) {
      setProfile(savedAdmin);
      setFormData({
        name: savedAdmin.name,
        email: savedAdmin.email,
        phone: savedAdmin.phone || "",
        dob: savedAdmin.dob ? savedAdmin.dob.split("T")[0] : "",
        profileImage: savedAdmin.profileImage || "",
      });
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData({ ...formData, profileImage: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProfile = { ...profile, ...formData };
    localStorage.setItem("admin", JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
    setEditMode(false);
    setLoading(false);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Change duration here
  };

  if (!profile) return <p className="text-center mt-6">Loading...</p>;

  const age = formData.dob
    ? Math.floor(
      (new Date() - new Date(formData.dob)) / (365.25 * 24 * 60 * 60 * 1000)
    )
    : "N/A";

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Profile</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-1 transition-all">
          <div className="flex flex-col items-center">

            <img
              src={formData.profileImage || "/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-600 cursor-pointer"
              onClick={() =>
                document.getElementById("profileImageInput").click()
              }
            />

            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <h3 className="text-xl font-semibold mb-1">{formData.name}</h3>

            <p className="text-gray-500 mb-2">{profile.role || "Admin"}</p>

            <p className="text-gray-600 text-sm mb-1">
              Email: {formData.email}
            </p>

            <p className="text-gray-600 text-sm mb-1">
              Phone: {formData.phone || "N/A"}
            </p>

            <p className="text-gray-600 text-sm mb-2">
              DOB: {formData.dob || "N/A"} ({age} years)
            </p>

            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Edit Profile
              </button>

            ) : (
                
              <form
                onSubmit={handleSubmit}
                  className="flex flex-col gap-2 mt-2 text-gray-700">
                  
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                  />
                  
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                  />
                  
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  
                <input
                  type="date"
                  name="dob"
                  placeholder="DOB"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  
                <div className="flex gap-2 mt-2 flex-wrap justify-center">
                  <button type="submit" disabled={loading}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition disabled:opacity-50">
                    {loading ? "Saving..." : "Save Changes"}
                    </button>
                    
                  <button type="button" onClick={() => setEditMode(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Fade-in/out success popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 opacity-100 animate-fade-in-out">
          Profile updated successfully!
        </div>
      )}
    </div>
  );
};

export default Profile;
