<?php
/**
 * Created by PhpStorm.
 * User: dyyhobby
 * Date: 2017/4/30
 * Time: 18:31
 */

namespace App\Events;

use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;


class ServerCreated implements ShouldBroadcast
{
    use SerializesModels;

    public $user;

    /**
     * 初始化一个服务实例
     * ServerCreated constructor.
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * 获取事件广播的频道
     *
     * @return Channel
     */
    public function broadcastOn()
    {
        // TODO: Implement broadcastOn() method.

        \Log::info('Event Start');

        return new PrivateChannel('user.'.$this->user->id);
    }

    /**
     * 设置事件名称
     * @return string
     */
    public function broadcastAs()
    {

        return 'server.created';

    }
}