exports.getAllCourses = (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'All courses',
  });
};
