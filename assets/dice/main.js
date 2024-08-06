var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

"use strict";

/**
 * @param {HTMLElement} container
 */
function dice_initialize(container) {
	  var playing = false;
    var canvas = $t.id('dice-canvas');
    var label = $t.id('label');

    $t.dice.use_true_random = false;

    var params = $t.get_url_params();

    var box = new $t.dice.dice_box(canvas, { w: 480, h: 480 });
    box.animate_selector = false;

    function show_selector() {
        box.draw_selector();
    }

    function before_roll(vectors, notation, callback) {
      label.innerHTML = ""
        // do here rpc call or whatever to get your own result of throw.
        // then callback with array of your result, example:
        // callback([2, 2, 2, 2]); // for 4d6 where all dice values are 2.
        callback();
    }

    function notation_getter2() {
        return $t.dice.parse_notation("2d6");
    }

	    function notation_getter3() {
        return $t.dice.parse_notation("3d6");
    }

    function after_roll(notation, result) {

        label.innerHTML = result.join(' + ') + ' = ' + result.reduce((acumulador, numero) => acumulador + numero, 0);
    }

	box.bind_throw($t.id('throw-2'), notation_getter2, before_roll, after_roll);
	box.bind_throw($t.id('throw-3'), notation_getter3, before_roll, after_roll);

    if (params.roll) {
        $t.raise_event($t.id('throw'), 'mouseup');
    }
    else {
        show_selector();
    }
}
}
