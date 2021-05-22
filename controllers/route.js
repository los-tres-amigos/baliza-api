function list (req, res) {
    res.json([
        {
            routeName: 'Route 1',
        },
        {
            routeName: 'Route 2',
        },
        {
            routeName: 'Route 3',
        }
    ]);
}

export default { list };