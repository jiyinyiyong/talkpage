// Generated by CoffeeScript 1.4.0
var draw_title, inpage, notify;

notify = {
  posts: 0,
  topic: 0
};

inpage = true;

$(window).focus(function() {
  inpage = true;
  $('title').text('talkpage');
  notify.posts = 0;
  notify.topic = 0;
  return show('focus');
});

$(window).blur(function() {
  show('blur');
  return inpage = false;
});

draw_title = function() {
  return $('title').text("" + notify.posts + " / " + notify.topic);
};

$(function() {
  bind_events();
  if (ls.name != null) {
    $('#set-name').val(ls.name);
    s.emit('set-name', ls.name);
  } else {
    s.emit('set-name', '$null');
  }
  if ((ls.avatar != null) && ls.avatar.length > 0) {
    $('#set-avatar').val(ls.avatar);
    $('#set-avatar').trigger('input');
    s.emit('set-avatar', ls.avatar);
  } else {
    s.emit('set-avatar', 'http://tp2.sinaimg.cn/1766492277/50/0/1');
  }
  if (!((ls.name != null) && ls.avatar)) {
    $('#setting').animate({
      width: '400px'
    });
    $('#toggle').attr('src', '../pics/arrow-right.png');
  }
  delay(800, focus_type);
  return set_padding();
});
