class Eronote < ApplicationRecord
 attr_accessor :eromage
mount_uploader :eromage , EromagesUploader

validates_presence_of :eromage

end
