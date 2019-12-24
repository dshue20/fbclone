unless @friendship.nil?
    json.extract! @friendship, :requestor_id, :receiver_id, :status, :id
else
    {}
end