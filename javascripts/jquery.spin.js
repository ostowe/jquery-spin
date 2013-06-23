// Generated by CoffeeScript 1.6.3
/*
jQuery Spin
Copyright 2013 Kevin Sylvestre
*/


(function() {
  "use strict";
  var $, Spin;

  $ = jQuery;

  Spin = (function() {
    Spin.prototype.defaults = {
      petals: 9
    };

    Spin.spin = function(element, options) {
      var _base;
      if (options == null) {
        options = {};
      }
      debugger;
      if (this.spins == null) {
        this.spins = {};
      }
      return (_base = this.spins)[element] != null ? (_base = this.spins)[element] : _base[element] = new Spin(element, options);
    };

    function Spin(element, options) {
      this.$element = $(element);
      this.options = $.extend({}, this.defaults, options);
      this.configure();
    }

    Spin.prototype.show = function() {
      return this.$element.animate({
        opacity: 1.0
      });
    };

    Spin.prototype.hide = function() {
      return this.$element.animate({
        opacity: 0.0
      });
    };

    Spin.prototype.destroy = function() {
      this.$element.empty();
      return this.$element.data('spin', void 0);
    };

    Spin.prototype.configure = function() {
      var $petal, i, _i, _ref, _results;
      this.$element.empty();
      _results = [];
      for (i = _i = 0, _ref = this.options.petals; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        $petal = $("<div />");
        _results.push(this.$element.append($petal));
      }
      return _results;
    };

    return Spin;

  })();

  $.fn.spin = function(options) {
    return $(this).each(function() {
      var spin;
      spin = Spin.spin(this, options);
      if (typeof options === 'string') {
        return spin[options]();
      }
    });
  };

  $(function() {
    return $('[data-spin]').spin();
  });

}).call(this);
