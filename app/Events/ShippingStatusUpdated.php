<?php
/**
 * Created by PhpStorm.
 * User: dyyhobby
 * Date: 2017/4/30
 * Time: 18:23
 */

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;


class ShippingStatusUpdated implements ShouldBroadcast
{
    /**
     * 状态信息
     * @var
     */

    public $update;

    public function broadcastOn()
    {
        // TODO: Implement broadcastOn() method.

        return new PrivateChannel('order.'.$this->update->order_id);
    }

}