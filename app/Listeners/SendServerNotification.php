<?php

namespace App\Listeners;

use App\Events\ServerCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Log;

class SendServerNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ServerCreated  $event
     * @return void
     */
    public function handle(ServerCreated $event)
    {
        //
        Log::info('Event Listener Start Jobs');

    }
}
