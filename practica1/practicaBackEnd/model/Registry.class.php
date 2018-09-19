<?php
class Registry
{
    public function __construct()
    {
        $this->data = [];
    }
    public function RegisterMessage($dir1, $dir2, $message)
    {
        $this->data[] = $dir1 . "," . $dir2 . "," . $message;
    }
    public function ListMessages($user)
    {
        $html = "";
        foreach ($this->data as $key => $value) {
            $value = explode(",", $value);
            if ($value[0] === $user) {
                $html .= "<p><span class='transmitter'> transmitter: </span>" . $value[0] . "<span class='receiver'> receiver: </span>" . $value[1] . "<span class='message'> message: </span>" . $value[2] . "</p>";
            }
        }
        if($html == ""){
            return "<span class'error'>no se han encontrado mensaje para este usuario.</span>";
        }else{
            return $html;
        }
    }
}
