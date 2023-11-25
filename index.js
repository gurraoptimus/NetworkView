var w = c.width = window.innerWidth,
    h = c.height=window.innerHeight,
    ctx = c.getContext("2D"),
    opts ={
    },








































    squareRange = opts.range * opts.range,
    squareAllowed = opts.allowedDist * opts.allowedDist,
    mostDistant = opts.depth + opts.range,
    sinX = sinY = 0,
    cosX = cosY = 0,

    