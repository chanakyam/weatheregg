-module(weatheregg_app).

-behaviour(application).

%% Application callbacks
-export([start/2, stop/1]).

%% ===================================================================
%% Application callbacks
%% ===================================================================

start(_StartType, _StartArgs) ->
	Dispatch = cowboy_router:compile([
		{'_',[
                {"/", home_page_handler, []},
                {"/about", about_page_handler, []},
                {"/termsandconditions", tnc_page_handler, []},
                {"/chart", chart_page_handler, []},
                {"/map", map_page_handler, []},
                {"/weather_forecast", weather_forecast_page_handler, []},
                {"/weather_map", weather_map_page_handler, []},
                %%
                %% Release Routes
                %%
    			{"/css/[...]", cowboy_static, {priv_dir, weatheregg, "static/css"}},
    			{"/images/[...]", cowboy_static, {priv_dir, weatheregg, "static/images"}},
    			{"/js/[...]", cowboy_static, {priv_dir, weatheregg, "static/js"}},
				{"/fonts/[...]", cowboy_static, {priv_dir, weatheregg, "static/fonts"}}
				%%
				%% Dev Routes
				%%
				%{"/css/[...]", cowboy_static, {dir, "priv/static/css"}},
                %{"/images/[...]", cowboy_static, {dir, "priv/static/images"}},
                %{"/js/[...]", cowboy_static, {dir,"priv/static/js"}},
				%{"/fonts/[...]", cowboy_static, {dir, "priv/static/fonts"}}
        ]}		
	]), 
    

	{ok, _} = cowboy:start_http(http,100, [{port, 9915}],[{env, [{dispatch, Dispatch}]},
                                                          {onresponse, fun error_hook_responder:respond/4 },
                                                          {onrequest, fun request_hook_responder:set_cors/1}
                                                          
              ]),
    weatheregg_sup:start_link().

stop(_State) ->
    ok.
