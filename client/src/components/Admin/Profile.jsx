
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const { admin } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    profileImage: "",
  });

  useEffect(() => {
    // Load admin data from localStorage
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
    setError("");

    try {
      // Simulate API call
      const updatedProfile = { ...profile, ...formData };
      localStorage.setItem("admin", JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
      setEditMode(false);
    } catch (err) {
      setError("Failed to update profile.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <p className="text-center mt-6">Loading...</p>;

  // Calculate age from DOB
  const age = formData.dob
    ? Math.floor(
      (new Date() - new Date(formData.dob)) / (365.25 * 24 * 60 * 60 * 1000)
    )
    : "N/A";

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Admin Profile</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
        {/* Left column: Image */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="relative mb-4">
            <img
              src={formData.profileImage || "/default-avatar.png"}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-purple-600 cursor-pointer"
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
          </div>
          <h3 className="text-xl font-semibold">{formData.name}</h3>
          <p className="text-gray-500">{profile.role || "Admin"}</p>
        </div>

        {/* Right column: Info */}
        <div className="flex-1">
          {!editMode ? (
            <div className="flex flex-col gap-3 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span> {profile.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {profile.phone || "N/A"}
              </p>
              <p>
                <span className="font-semibold">DOB:</span>{" "}
                {formData.dob || "N/A"} ({age} years)
              </p>

              <button
                onClick={() => setEditMode(true)}
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 text-gray-700"
            >
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

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex gap-2 mt-2 flex-wrap">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
