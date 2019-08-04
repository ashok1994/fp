// Creating the cons
function cons(x, xs = null) {
  return i => {
    if (i == 0) {
      return x;
    } else {
      return xs;
    }
  };
}

// Constructing list functions
function lst() {
  var args = Array.from(arguments);
  if (args.length === 0) {
    return null;
  } else {
    return cons(args[0], lst(...args.slice(1)));
  }
}

function head(xs) {
  return xs(0);
}

function tail(xs) {
  return xs(1);
}

function isEmpty(xs) {
  return xs == null;
}

function length(xs) {
  if (isEmpty(xs)) {
    return 0;
  } else {
    return 1 + length(tail(xs));
  }
}

function concat(xs, ys) {
  if (isEmpty(xs)) {
    return ys;
  } else {
    return cons(head(xs), concat(tail(xs), ys));
  }
}

function last(xs) {
  if (isEmpty(tail(xs))) {
    return head(xs);
  } else {
    return last(tail(xs));
  }
}

function init(xs) {
  if (isEmpty(tail(tail(xs)))) {
    return cons(head(xs));
  } else {
    return cons(head(xs), init(tail(xs)));
  }
}

function reverse(xs) {
  if (isEmpty(xs)) {
    return xs;
  } else {
    return concat(reverse(tail(xs)), cons(head(xs), null));
  }
}


