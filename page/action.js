// Generated by CoffeeScript 1.3.3
var create_topic, focus_type, highlight_joined, listen_topic, scroll_view, set_avatar, set_name, slide_right, start_posts, start_topic, sync_post;

create_topic = function() {
  var text;
  text = $('#create').val().trim();
  if (text.length > 0) {
    s.emit('create-topic', text);
  }
  $('#create').val('');
  return $('#create').fadeOut();
};

focus_type = function() {
  if ($('body').scrollLeft() > 100) {
    return $('body').animate({
      scrollLeft: 0
    }, function() {
      return $('#type').focus();
    });
  } else {
    return $('#type').focus();
  }
};

slide_right = function() {
  var left, screen_width;
  left = $('body').scrollLeft();
  screen_width = $(window).width();
  show(screen_width, left);
  if (left < 10) {
    return $('body').animate({
      scrollLeft: 2000 - screen_width
    });
  } else {
    return focus_type();
  }
};

set_name = function() {
  var name;
  name = $('#set-name').val();
  ls.name = name;
  return s.emit('set-name', name);
};

set_avatar = function() {
  ls.avatar = $('#set-avatar').val();
  $('#avatar').attr('src', ls.avatar);
  return s.emit('set-avatar', ls.avatar);
};

listen_topic = function(obj) {
  return add_topic(obj);
};

start_topic = function(list) {
  var end, topic_id;
  if (found(list)) {
    list.forEach(listen_topic);
    end = last(list);
    topic_id = end.topic_id;
    s.emit('goto-topic', topic_id);
    return highlight_joined(topic_id);
  } else {
    return add_err({
      text: 'create one topic and refresh..'
    });
  }
};

start_posts = function(list) {
  $('#show').empty();
  return list.forEach(add_post);
};

sync_post = function(obj) {
  var elem, post_id, query;
  post_id = obj.post_id;
  query = ".unit span[post_id='" + post_id + "']";
  elem = $(query);
  if (found(elem)) {
    return elem.text(obj.text);
  } else {
    return add_post(obj);
  }
};

scroll_view = function(direc) {
  var h, top;
  top = $('#show').scrollTop();
  h = $(window).height() - 200;
  if (direc === 'up') {
    return $('#show').animate({
      scrollTop: top - h
    });
  } else if (direc === 'down') {
    return $('#show').animate({
      scrollTop: top + h
    });
  }
};

highlight_joined = function(topic_id) {
  var query;
  show(topic_id);
  query = "#inside .unit[topic_id='" + topic_id + "']";
  $('.joined').removeClass('joined');
  return $(query).addClass('joined');
};
