class Category < ApplicationRecord
  has_many :reservations
  validates :name, presence: true
end
